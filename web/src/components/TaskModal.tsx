import { FiX, FiExternalLink } from "react-icons/fi"
import { Task } from "../types"

interface ModalProps {
  task: Task | null
  onClose: () => void
}

export default function TaskModal({ task, onClose }: ModalProps) {
  if (!task) return null

  // 1. Logika untuk menentukan apakah tugas ini Urgent (Mepet)
  const isUrgent = !task.is_submitted && task.timestamp && task.timestamp - Date.now() <= 7 * 24 * 60 * 60 * 1000

  // 2. Tentukan Warna Tema (Header & Tombol) berdasarkan status
  let themeColor = {
    header: "bg-slate-900", // Biasa (To Do)
    button: "bg-slate-900 hover:bg-slate-800 shadow-slate-900/30 text-white",
    btnText: "Kerjakan di Kulino",
  }

  if (task.is_submitted) {
    themeColor = {
      header: "bg-emerald-500", // Sudah Submit
      button: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30 text-white",
      btnText: "Lihat di Kulino", // Teksnya diganti dikit karena udah kelar
    }
  } else if (isUrgent) {
    themeColor = {
      header: "bg-rose-600", // Urgent
      button: "bg-rose-600 hover:bg-rose-700 shadow-rose-600/30 text-white",
      btnText: "Gas Kerjakan Sekarang!", // Teksnya dibikin panik wkwk
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-4xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh] scale-100 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Modal (Warnanya Dinamis) */}
        <div
          className={`p-6 text-white flex justify-between items-start transition-colors duration-300 ${themeColor.header}`}
        >
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {task.status || "Status Unknown"}
              </span>
              {task.course && (
                <span className="bg-black/20 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md truncate max-w-50">
                  {task.course}
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold leading-tight">{task.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-400 font-semibold mb-1">DIBUKA</p>
              <p className="text-sm font-medium text-slate-700">{task.opened_date || "-"}</p>
            </div>
            {/* Box TENGGAT WAKTU ikut merah kalau mepet */}
            <div
              className={`p-4 rounded-2xl border ${isUrgent && !task.is_submitted ? "bg-rose-50 border-rose-200" : "bg-slate-50 border-slate-100"}`}
            >
              <p
                className={`text-xs font-semibold mb-1 ${isUrgent && !task.is_submitted ? "text-rose-500" : "text-slate-400"}`}
              >
                TENGGAT WAKTU
              </p>
              <p className={`text-sm font-bold ${isUrgent && !task.is_submitted ? "text-rose-700" : "text-slate-700"}`}>
                {task.due_date || "-"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold mb-2 uppercase">Deskripsi Tugas</p>
            <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">
              {task.description || "Tidak ada deskripsi."}
            </p>
          </div>
        </div>

        {/* Footer Modal (Tombol Warnanya Dinamis) */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button
            onClick={() => task.link && window.open(task.link, "_blank")}
            className={`w-full py-4 font-bold rounded-2xl shadow-lg transition-all flex justify-center items-center gap-2 ${themeColor.button}`}
          >
            {themeColor.btnText} <FiExternalLink />
          </button>
        </div>
      </div>
    </div>
  )
}
