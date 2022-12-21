import _ from 'lodash'

const mahasiswa = [
  {
    nama: "Aditya Gustian",
    email: "adityagustian11@gmail.com",
    jurusan: "Teknik Elektronika"
  },
  {
    nama: "Bayu Ari Saputra",
    email: "bayuari@gmail.com",
    jurusan: "Teknik informatika"
  },
  {
    nama: "Arif Mulia Rahman",
    email: "arifmuliarahman@gmail.com",
    jurusan: "Teknik Mesin"
  },
]

// const mhs = mahasiswa.find(mahasiswa => {
//   return mahasiswa.nama == "Aditya Gustian"
// })

const mhs = _.find(mahasiswa,{
  nama: 'Bayu Ari Saputra'
});

console.log(mhs);