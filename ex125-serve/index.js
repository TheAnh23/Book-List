const express = require("express")
const app = express()
const port = 3001
const morgan = require("morgan")
app.use(morgan("combined"))
app.get("/", (req, res) => {
    res.send("Hello Restful API")
})

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})

const cors = require("cors")
app.use(cors())

const bodyParser = require("body-parser")
app.use(bodyParser.json())

let database = [
    {
        "ID":"B1",
        "Tensach": "Giáo trình tin học cơ bản",
        "Giaban": 26000,
        "Mota": "Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiệu cuốn sách cùng bạn",
        "Anhbia": "1.jpg",
        "Ngaycapnhat": Date("25/11/2024 12:00:00 SA"),
        "Soluongton": 120,
        "MaCD": 7,
        "MaNXB": 1,
    },
    {
        "ID":"B2",
        "Tensach": "Giáo trình Cơ sở Dữ liệu với Visual Basic 2005 Và ADO.NET 2.0",
        "Giaban": 12000,
        "Mota": "Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản trong Microsoft thiệu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiển ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cùng các bạn.",
        "Anhbia": "2.jpg",
        "Ngaycapnhat": Date("23/10/2023 12:00:00 SA"),
        "Soluongton": 25,
        "MaCD": 3,
        "MaNXB": 2,
    },
    {
        "ID":"B3",
        "Tensach": "Visual Basic 2005 Tập 3, Quyển 2: Lập trình Web",
        "Giaban": 20000,
        "Mota": `Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu" sẽ cung cấp kỹ thuật và hướng dẫn bạn: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web "Quản lý CD Shop" trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET Framework. Sách có kèm theo CD-ROM bài tập.`,
        "Anhbia": "3.jpg",
        "Ngaycapnhat": Date("15/09/2014 12:00:00 SA"),
        "Soluongton": 240,
        "MaCD": 8,
        "MaNXB": 4,
    },
]
app.get("/books", (req, res) => {
    res.send(database)
})

app.get("/books/:id", cors(), (req, res) => {
    id = req.params["id"]
    let p = database.find(x => x.ID == id)
    res.send(p)
})

app.post("/books", cors(), (req, res) => {
    //put json book into database 
    database.push(req.body);
    //send message to client(send all database to client) 
    res.send(database)
})

app.put("/books", cors(), (req, res) => {
    book = database.find(x => x.ID == req.body.ID)
    if (book != null) {
        book.Tensach = req.body.Tensach
        book.Giaban = req.body.Giaban
        book.Mota = req.body.Mota
        book.Anhbia = req.body.Anhbia
        book.Ngaycapnhat = req.body.Ngaycapnhat
        book.Soluongton = req.body.Soluongton
        book.MaCD = req.body.MaCD
        book.MaNXB = req.body.MaNXB
    }
    res.send(database)
})
app.delete("/books/:id", cors(), (req, res) => {
    id = req.params["id"]
    database = database.filter(x => x.ID !== id);
    res.send(database)
}) 