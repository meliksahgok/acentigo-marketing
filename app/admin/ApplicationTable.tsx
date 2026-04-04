'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type ApplicationStatus = 'NEW' | 'CONTACTED' | 'CLOSED'

export type ApplicationRow = {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  message: string
  status: string
  createdAt: Date | string
}

const STATUS_LABEL: Record<ApplicationStatus, string> = {
  NEW: 'Yeni',
  CONTACTED: 'İletişim kuruldu',
  CLOSED: 'Kapatıldı',
}

export default function ApplicationTable({ initial }: { initial: ApplicationRow[] }) {
  const router = useRouter()
  const [rows, setRows] = useState(initial)
  const [updating, setUpdating] = useState<string | null>(null)

  async function updateStatus(id: string, status: string) {
    setUpdating(id)
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) throw new Error()
      const updated = (await res.json()) as ApplicationRow
      setRows((prev) => prev.map((r) => (r.id === id ? updated : r)))
      router.refresh()
    } catch {
      alert('Durum güncellenemedi.')
    } finally {
      setUpdating(null)
    }
  }

  if (rows.length === 0) {
    return (
      <p className="text-gray-400 text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
        Henüz başvuru yok. İletişim formu gönderildiğinde burada listelenecek.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03] text-gray-400">
            <th className="p-4 font-medium">Tarih</th>
            <th className="p-4 font-medium">Ad</th>
            <th className="p-4 font-medium">E-posta</th>
            <th className="p-4 font-medium">Telefon</th>
            <th className="p-4 font-medium">Şirket</th>
            <th className="p-4 font-medium min-w-[200px]">Mesaj</th>
            <th className="p-4 font-medium">Durum</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-white/[0.02]">
              <td className="p-4 text-gray-400 whitespace-nowrap">
                {new Date(row.createdAt).toLocaleString('tr-TR')}
              </td>
              <td className="p-4 text-white font-medium">{row.name}</td>
              <td className="p-4">
                <a href={`mailto:${row.email}`} className="text-primary hover:underline">
                  {row.email}
                </a>
              </td>
              <td className="p-4 text-gray-300">{row.phone ?? '—'}</td>
              <td className="p-4 text-gray-300">{row.company ?? '—'}</td>
              <td className="p-4 text-gray-400 max-w-xs">
                <span className="line-clamp-3">{row.message}</span>
              </td>
              <td className="p-4">
                <select
                  value={row.status}
                  disabled={updating === row.id}
                  onChange={(e) => updateStatus(row.id, e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50"
                >
                  {(Object.keys(STATUS_LABEL) as ApplicationStatus[]).map((s) => (
                    <option key={s} value={s}>
                      {STATUS_LABEL[s]}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
