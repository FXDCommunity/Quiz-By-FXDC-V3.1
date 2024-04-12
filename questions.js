// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 26,
        question: "Dalam Proses Pembuatan Game Pasti Adanya Bug",
        answer: "Programmer",
        options: ["Programming", "Programmer", "Coding Game", "Create Game"]
    },
    {
        numb: 2,
        question: "Hal Yang Susah Di Pelajari Bagi Programmer Adalah?",
        answer: "Mempelajari Bahasa Programming",
        options: [
            "Cara Membuat Game",
            "Mempelajari Hacking",
            "Mempelajari Bahasa Programming",
            "Mengunduh Aplikasi Programming"
        ]
    },
    {
        numb: 3,
        question: "Kepanjangan Dari HTML Adalah?",
        answer: "Hypertext Markup Language",
        options: [
            "Hypertext Marking Language",
            "Hypertext Mark Language",
            "Hypertext Markup Language",
            "Hypertext Making Language"
        ]
    },
    {
        numb: 4,
        question: "Kepanjangan Dari CSS Adalah?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Script Style",
            "Cascading Style Sheets",
            "Cascading Style Saver",
            "Cascading Style Script"
        ]
    },
    {
        numb: 5,
        question: "Kepanjangan Dari JS Adalah?",
        answer: "JavaScript",
        options: ["JavaStyle", "JavaSheets", "JavaScript", "JavaSaver"]
    },
    {
        numb: 6,
        question: "Bahasa Programmer Yang Paling Tinggi Dan Dinamis Adalah?",
        answer: "JavaScript",
        options: [
            "Cascading Style Sheets",
            "Hypertext Markup Language",
            "JavaScript",
            "Hacking"
        ]
    },
    {
        numb: 7,
        question: "CSS Di Gunakan Untuk Mengatur?",
        answer: "Kebesaran Suatu Benda Maupun Warna Dari Benda Tersebut",
        options: [
            "Supaya Tidak Ada Bug Di Dalam Game",
            "Kebesaran Suatu Benda Maupun Warna Dari Benda Tersebut",
            "Benda Di Dalam Game Tidak Akan Melayang",
            "Tidak Ada Cheater Di Dalam Game Tersebut"
        ]
    },
    {
        numb: 8,
        question: "HTML Di Gunakan Untuk?",
        answer: "Fondasi/Struktur Sebuah Website",
        options: [
            "Untuk Membuat Game",
            "Memperbaiki Masalah Yang Ada Di Dalam Game",
            "Fondasi/Struktur Sebuah Website",
            "Semua Jawaban Benar"
        ]
    },
    {
        numb: 9,
        question: "Apa Kegunaan JavaScript?",
        answer: "Mengurangi Beban Server Dan Kemacetan Jaringan",
        options: [
            "Mengurangi Bug Yang Terjadi Di Dalam Game",
            "Tidak Ada Hambatan Ketika Game Sudah Rilis",
            "Mengurangi Beban Server Dan Kemacetan Jaringan",
            "Semua Jawaban Benar"
        ]
    },
    {
        numb: 10,
        question:
            "Aplikasi Apa Yang Umum Di Gunakan Untuk Membuat Game 3D Di Laptop/PC",
        answer: "Unity",
        options: ["Unity", "Python", "Code Editor", "Semua Jawaban Benar"]
    },
    {
        numb: 11,
        question: "Cara Membuat File Baru Adalah?",
        answer: "Create New File",
        options: [
            "Create",
            "Create File",
            "Create New File",
            "Save File"
        ]
    },
    {
        numb: 12,
        question: "Bahasa Pemrograman Yang Paling Mudah Adalah?",
        answer: "Python",
        options: ["Python", "Hacking", "JavaScript", "HTML"]
    },
    {
        numb: 13,
        question:
            "Tombol Apa Yang Di Gunakan Untuk Menyalin Teks Di Laptop/PC?",
        answer: "CTRL+C",
        options: ["CTRL+V", "CTRL+ALT", "CTRL+C", "CTRL+F1"]
    },
    {
        numb: 14,
        question:
            "Game Yang Terlalu Nyata Di Buat Dengan Aplikasi?",
        answer: "Unreal Engine",
        options: [
            "Unreal Engine",
            "Unity",
            "Python",
            "Terminal"
        ]
    },
    {
        numb: 15,
        question: "Tugas Dari Seorang Admin Di Dalam Game Adalah?",
        answer: "Mengatur Game Agar Tidak Ada Cheater Di Dalamnya",
        options: [
            "Merusak Game",
            "Mengatur Game Agar Tidak Ada Cheater Di Dalamnya",
            "Troll Player",
            "Ngecheat Di Dalam Game"
        ]
    },
    {
        numb: 16,
        question: "Game Yang Mudah Di Buat Adalah?",
        answer: "Snake Game",
        options: [
            "Mobile Legends",
            "Mario Bross",
            "Snake Game",
            "Point Blank"
        ]
    },
    {
        numb: 17,
        question: "Game PS 2 Yang Populer Dahulu Hingga Sekarang Adalah?",
        answer: "GTA San Andreas",
        options: [
            "Mario Bross",
            "Mortal Kombat Shaolin Monks",
            "Bully",
            "GTA San Andreas"
        ]
    },
    {
        numb: 18,
        question: "Cara Mensave File Dan Menambahkan Nama Di File Tersebut Adalah?",
        answer: "Save As",
        options: ["Save", "Save As", "Delete", "Enter"]
    },
    {
        numb: "19",
        question: "Remote Dekstop Di Gunakan Untuk?",
        answer: "Untuk Menggunakan Perangkat Windows Di Manapun Dan Kapanpun",
        options: [
            "Untuk Mengcoding Game",
            "Membuat Design",
            "Untuk Menggunakan Perangkat Windows Di Manapun Dan Kapanpun",
            "Semua Jawaban Benar"
        ]
    },
    {
        numb: "20",
        question: "Hal Yang Baru Di Dalam Game Di Sebut?",
        answer: "NEW Update",
        options: ["NEW Update", "New", "New File", "Added"]
    },
    {
        numb: "21",
        question: "Game HORROR Pamali Berasal Dari Negara?",
        answer: "Indonesia",
        options: ["Filipina", "Indonesia", "Amerika Serikat", "Inggris"]
    },
    {
        numb: "22",
        question: "Mengapa Dalam Perilisan Sebuah Game Pasti Adanya Delay?",
        answer: "Karena Adanya Bug Di Dalam Game Pada Saat Perilisan Game",
        options: ["Adanya Telpom Dari Seseoramg", "Karena Adanya Bug Di Dalam Game Pada Saat Perilisan Game", "Mengupdate Game Ke Versi Yang Terbaru", "SEMUA JAWABAN BENAR"]
    },
    {
        numb: "23",
        question: "Apa Arti Maintenance?",
        answer: "Game Sedang Ditutup Sementara Karena Ada Bug",
        options: ["Membuat Game","Game Sedang Di Update","Game Sedang Ditutup Sementara Karena Ada Bug", "SEMUA JAWABAN BENAR"]
    },
    {
        numb: "24",
        question: "Apa Yang Membuat Sebuah Game Memiliki Banyak BUG?",
        answer: "Adanya Deadline Yang Harus Di Kejar",
        options: ["Adanya Deadline Yang Harus Di Kejar", "Kelalaian Developer Semdiri", "Adanya Cheater Di Dalam Game Tersebut", "SEMUA JAWABAN BENAR"]
    },
    {
        numb: "25",
        question: "Game Genshin Impact Genre?",
        answer: "RPG",
        options: ["Shooting", "RPG", "Adventure", "Martial Art"]
    }
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];
