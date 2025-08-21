import { useState } from "react"
import Swal from "sweetalert2"

function App() {

  const [form, setForm] = useState({ name: "", telp: "" })
  const [editId, setEditId] = useState(null)

  const [contacts, setContacts] = useState([
    { id: '50593a6f-ff12-43c6-a350-4ca4eb1e050b', name: "Mulyono", telp: "081230217043" },
    { id: '9683792c-d98b-4018-a39c-40d92ff5b66a', name: "Mega", telp: "085821764881" },
    { id: '623779cc-72bc-4946-9139-d3fa065520e2', name: "Tanjiro", telp: "089634619683" }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData.entries());

    if (!editId) {
      addContact(newContact)
      return
    } else {
      updateContact(editId, newContact)
    }
  }

  // Jika tombol edit di klik
  const handleEdit = (contact) => {
    setForm(contact)
    setEditId(contact.id)
  }

  // Tambahkan kontak baru
  const addContact = (contact) => {
    setContacts((prev) => [...prev, {
      id: crypto.randomUUID(),
      name: contact.name,
      telp: contact.telp
    }])

    setForm({ name: "", telp: "" })
    console.log(contact)
  }

  // Update kontak
  const updateContact = (id, contact) => {
    setContacts((prev) => (
      prev.map((c) => c.id === id ? { ...c, ...contact } : c)
    ))

    setForm({ name: "", telp: "" })
    setEditId(null)
  }

  // Delete kontak
  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin hapus?",
      text: "Data kontak tidak bisa dikembalikan!",
      icon: "warning",
      background: "#0f172b",
      showCancelButton: true,
      confirmButtonColor: "#e11d48", 
      cancelButtonColor: "#6b7280",  
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        setForm({ name: "", telp: "" });
        setEditingId(null);
        Swal.fire("Terhapus!", "Kontak sudah dihapus.", "success");
      }
    });
  };

  return (
    <>
      <div className="bg-slate-950 min-h-dvh w-full text-white antialiased grid place-items-center py-16 px-6">
        <div className="container max-w-5xl bg-slate-900 rounded-4xl p-8 shadow-2xl">
          <h1 className="text-center text-xl px-6 py-4 bg-slate-800 w-max mx-auto rounded-2xl">{editId ? 'Edit Kontak' : 'Tambahkan Kontak'}</h1>

          <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nama Kontak:
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full outline-none border bg-slate-800 border-white/5 py-2 px-3 mt-2 focus:border-white/10 rounded-md"
                placeholder="Masukan nama kontak baru disini..."
              />
            </label>
            <label htmlFor="telp" className="mt-4">
              Nomor Telepon:
              <input
                type="tel"
                name="telp"
                id="telp"
                value={form.telp}
                onChange={(e) => setForm({ ...form, telp: e.target.value })}
                className="w-full outline-none border border-white/5 py-2 px-3 mt-2 focus:border-white/10 rounded-md bg-slate-800"
                placeholder="Masukan nomor telepon baru disini..."
              />
            </label>
            <div className="flex gap-x-4 mt-4">
              <button type="submit" className="bg-rose-700 hover:bg-rose-800 cursor-pointer py-4 px-6 rounded-lg font-semibold border-white/10 flex-1">{editId ? 'Simpan Perubahan' : 'Tambahkan Kontak'}</button>
              {editId && (
                <button
                  type="button"
                  className="px-6 bg-gray-600 hover:bg-gray-700 cursor-pointer py-4 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    setEditId(null)
                    setForm({ name: "", telp: "" })
                  }}
                >
                  Batal
                </button>
              )}
            </div>
          </form>

          <div className="contact-list bg-white/2 mt-6 px-3 py-4 rounded-xl">
            <h3 className="mb-4 font-medium">Contact List:</h3>
            <hr className="border-white/10" />
            <ul className="mt-4">
              {contacts.map((contact) => (
                <li key={contact.id} className="hover:bg-white/2 px-4 py-3 flex justify-between border-b border-white/5 rounded-md">
                  <div className="contact-detail">
                    <h4 className="font-semibold">{contact.name}</h4>
                    <p className="text-gray-400 text-sm">{contact.telp}</p>
                  </div>
                  <div className="contact-action flex gap-x-4">
                    <button
                      className="px-6 py-2 rounded-md bg-purple-700 hover:bg-purple-800 hover:cursor-pointer"
                      onClick={() => handleEdit(contact)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-6 py-2 rounded-md bg-rose-700 hover:bg-rose-800 hover:cursor-pointer"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
