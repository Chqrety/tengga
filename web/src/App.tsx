import { useState, useEffect } from "react"
import data from "./data/data.json"
import { FiSearch, FiFilter, FiClock, FiBriefcase, FiCheckSquare } from "react-icons/fi"

import { Task } from "./types"
import { HighlightCard, TaskListItem } from "./components/Cards"
import TaskModal from "./components/TaskModal"
import TimelineDesktop from "./components/TimelineDesktop"

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const tasks: Task[] = data as Task[]

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedDate = currentTime.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
  const formattedTime =
    currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " WIB"

  const nowMs = Date.now()
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000
  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const doneTasks = filteredTasks.filter(t => t.is_submitted)
  const pendingTasks = filteredTasks.filter(t => !t.is_submitted)
  const urgentTasks = pendingTasks.filter(t => t.timestamp && t.timestamp - nowMs <= SEVEN_DAYS_MS)
  const todoTasks = pendingTasks.filter(t => !t.timestamp || t.timestamp - nowMs > SEVEN_DAYS_MS)

  const total = filteredTasks.length
  const percentDone = total > 0 ? (doneTasks.length / total) * 100 : 0
  const percentUrgent = total > 0 ? (urgentTasks.length / total) * 100 : 0

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-24 md:pb-10">
      <div className="md:flex md:gap-10 md:max-w-7xl md:mx-auto md:p-10">
        {/* 📱 AREA KIRI */}
        <div className="flex-1 p-6 md:p-0">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-slate-500 text-sm">Hey, Dinusian! ✨</p>
              <h1 className="text-3xl font-extrabold text-slate-950 mt-1">Mari Cek Tengga!</h1>
              <div className="flex flex-col text-xs text-slate-400 mt-2">
                <p>{formattedDate}</p>
                <p className="font-mono">{formattedTime}</p>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full bg-slate-300 border-4 border-white shadow-sm overflow-hidden">
              <img
                src="https://kulino.dinus.ac.id/theme/image.php/lambda/core/1658822515/u/f1"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Search & Stats */}
          <div className="relative mb-8 flex items-center gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari tugas, kuis..."
                value={searchQuery} // <-- Sambungin value-nya
                onChange={e => setSearchQuery(e.target.value)} // <-- Update state pas ngetik
                className="w-full bg-white text-sm p-4 pl-12 rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow"
              />
            </div>
            <button
              onClick={() => alert("Fitur Filter segera datang boss! 🚀")} // <-- Kasih alert lucu-lucuan dulu
              className="bg-slate-900 text-slate-100 p-4 rounded-2xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
            >
              <FiFilter />
            </button>
          </div>

          {/* Fitur Grafis: Statistik Sederhana */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {/* Card Total */}
            <div className="group relative overflow-hidden bg-white p-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-200 cursor-default flex flex-col items-end text-right">
              {/* Watermark Icon */}
              <FiBriefcase className="absolute -left-4 -bottom-4 text-[5rem] opacity-[0.03] text-slate-900 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
              {/* Konten */}
              <p className="text-3xl font-extrabold text-slate-950 relative z-10">{total}</p>
              <p className="text-xs text-slate-500 mt-1 relative z-10 font-medium">Total</p>
            </div>

            {/* Card Selesai */}
            <div className="group relative overflow-hidden bg-emerald-950 p-4 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col items-end text-right">
              {/* Watermark Icon */}
              <FiCheckSquare className="absolute -left-4 -bottom-4 text-[5rem] opacity-10 text-emerald-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
              {/* Konten */}
              <p className="text-3xl font-extrabold text-emerald-400 relative z-10">{doneTasks.length}</p>
              <p className="text-xs text-emerald-300 mt-1 relative z-10 font-medium">Selesai</p>
            </div>

            {/* Card Urgent */}
            <div className="group relative overflow-hidden bg-rose-950 p-4 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-rose-900/30 hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col items-end text-right">
              {/* Watermark Icon */}
              <FiClock className="absolute -left-4 -bottom-4 text-[5rem] opacity-10 text-rose-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
              {/* Konten */}
              <p className="text-3xl font-extrabold text-rose-400 relative z-10">{urgentTasks.length}</p>
              <p className="text-xs text-rose-300 mt-1 relative z-10 font-medium">Urgent</p>
            </div>
          </div>

          {/* Urgent Tasks */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-5">Paling Mepet!</h2>
            <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-4 -mx-6 px-6">
              {urgentTasks.length > 0 ? (
                urgentTasks.map((t, i) => (
                  <HighlightCard key={t.id || i} task={t} isUrgent={true} onClick={() => setSelectedTask(t)} />
                ))
              ) : (
                <div className="shrink-0 w-64 md:w-80 p-6 rounded-3xl bg-white text-center text-slate-500 text-sm italic border border-slate-200">
                  <FiClock className="text-3xl mx-auto mb-2 opacity-50" />
                  Aman bos! Nggak ada tugas mepet deadline dalam 7 hari ini.
                </div>
              )}
            </div>
          </div>

          {/* Todo Tasks */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-950 mb-5">Tugas To Do</h2>
            <div className="space-y-4 max-h-125 overflow-y-auto custom-scrollbar pr-2 pb-4">
              {todoTasks.length > 0 ? (
                todoTasks.map((t, i) => <TaskListItem key={t.id || i} task={t} onClick={() => setSelectedTask(t)} />)
              ) : (
                <p className="text-slate-500 text-sm italic text-center py-6 bg-white rounded-2xl border border-slate-200">
                  Yeay, tugas To Do kosong!
                </p>
              )}
            </div>
          </div>

          {/* Done Tasks (Mobile) */}
          <div className="mb-8 md:hidden">
            <h2 className="text-xl font-bold text-emerald-700 mb-5">Riwayat Sukses</h2>
            <div className="space-y-4 opacity-70">
              {doneTasks.length > 0 ? (
                doneTasks.map((t, i) => <TaskListItem key={t.id || i} task={t} onClick={() => setSelectedTask(t)} />)
              ) : (
                <p className="text-slate-500 text-sm italic text-center py-6 bg-white rounded-2xl border border-slate-200">
                  Belum ada tugas yang disubmit.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 💻 AREA KANAN */}
        <TimelineDesktop
          formattedDate={formattedDate.split(" ")[0]}
          percentDone={percentDone}
          percentUrgent={percentUrgent}
          doneTasks={doneTasks}
          onTaskClick={setSelectedTask}
        />
      </div>

      {/* MODAL */}
      <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  )
}
