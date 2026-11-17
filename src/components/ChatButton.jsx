import { useEffect, useRef, useState } from 'react'

const empty = { nama: '', email: '', pesan: '' }

// Tombol chat di sisi KANAN layar. Saat diklik -> tampil modal Bootstrap.
export default function ChatButton() {
  const modalRef = useRef(null)
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  // Reset form setiap modal ditutup
  useEffect(() => {
    const el = modalRef.current
    const onHidden = () => { setForm(empty); setSent(false) }
    el.addEventListener('hidden.bs.modal', onHidden)
    return () => el.removeEventListener('hidden.bs.modal', onHidden)
  }, [])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      <button
        type="button"
        className="float-btn chat-btn show"
        data-bs-toggle="modal"
        data-bs-target="#chatModal"
        aria-label="Buka chat"
      >
        <i className="bi bi-chat-left-text-fill" />
      </button>

      <div className="modal fade" id="chatModal" tabIndex="-1" aria-labelledby="chatModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="chatModalLabel">Silahkan berikan pesan disini!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            {sent ? (
              <>
                <div className="modal-body text-center py-5">
                  <i className="bi bi-check-circle-fill text-success display-5" />
                  <p className="mt-3 mb-0">Terima kasih, <strong>{form.nama}</strong>! Pesanmu sudah terkirim.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Tutup</button>
                </div>
              </>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="chatNama" className="form-label">Nama</label>
                    <input id="chatNama" name="nama" className="form-control" placeholder="Masukkan nama Anda" value={form.nama} onChange={onChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="chatEmail" className="form-label">Email</label>
                    <input id="chatEmail" name="email" type="email" className="form-control" placeholder="nama@example.com" value={form.email} onChange={onChange} required />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="chatPesan" className="form-label">Isi Pesan</label>
                    <textarea id="chatPesan" name="pesan" rows="4" className="form-control" placeholder="Tuliskan pesan Anda di sini..." value={form.pesan} onChange={onChange} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                  <button type="submit" className="btn btn-primary">kirim pesan</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
