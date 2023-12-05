const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
app.use(cors())
dotenv.config();

app.post("/api/save-data", async (req, res) => {
    const sensorData = req.body;

    try {
        const newData = await prisma.sensor.create({
            data: {
                ph: sensorData.ph,
                tds: sensorData.tds,
                suhu: sensorData.suhu,
                lembab: sensorData.lembab
            }
        });

        res.status(200).json({ message: "Data berhasil disimpan" });
    } catch (error) {
        res.status(500).json({ message: "Gagal menyimpan data", error: error.message });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
