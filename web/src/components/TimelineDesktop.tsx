import { Task } from "../types"
import { TaskListItem } from "./Cards"

interface TimelineProps {
  formattedDate: string
  percentDone: number
  percentUrgent: number
  doneTasks: Task[]
  onTaskClick: (task: Task) => void
}

export default function TimelineDesktop({
  formattedDate,
  percentDone,
  percentUrgent,
  doneTasks,
  onTaskClick,
}: TimelineProps) {
  return (
    <div className="sticky top-10 hidden md:flex flex-col flex-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-h-[85vh] overflow-y-auto custom-scrollbar">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-extrabold text-slate-950">Timeline Sukses</h2>
        <div className="text-emerald-500 text-2xl p-4 bg-emerald-50 rounded-2xl shadow-inner font-extrabold font-mono">
          {formattedDate}
        </div>
      </div>

      <div className="mb-8 pb-8 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 text-left">
            <p className="text-slate-400 font-medium text-sm mb-1">Kelar</p>
            <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              {percentDone.toFixed(0)}%
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <div className="h-6 w-0.5 bg-slate-100 rounded-full"></div>
            <div className="h-6 w-0.5 bg-slate-100 rounded-full"></div>
          </div>
          <div className="flex-1 text-right">
            <p className="text-slate-400 font-medium text-sm mb-1">Mepet</p>
            <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-l from-rose-400 to-orange-400">
              {percentUrgent.toFixed(0)}%
            </div>
          </div>
        </div>

        <div className="mt-6 w-full h-3 bg-slate-100 rounded-full flex overflow-hidden shadow-inner">
          <div
            style={{ width: `${percentDone}%` }}
            className="h-full bg-linear-to-r from-emerald-400 to-cyan-400 transition-all duration-500"
          ></div>
          <div className="flex-1 bg-transparent"></div>
          <div
            style={{ width: `${percentUrgent}%` }}
            className="h-full bg-linear-to-l from-rose-400 to-orange-400 transition-all duration-500"
          ></div>
        </div>
      </div>

      <h3 className="font-bold text-lg text-slate-700 mb-6 flex items-center gap-2">Tugas yang Sudah Dikumpulkan</h3>
      <div className="space-y-4">
        {doneTasks.length > 0 ? (
          doneTasks.map((t, i) => <TaskListItem key={t.id || i} task={t} onClick={() => onTaskClick(t)} />)
        ) : (
          <p className="text-slate-500 text-sm italic text-center py-10">Belum ada tugas yang diselesaikan.</p>
        )}
      </div>
      <div className="h-20"></div>
    </div>
  )
}
