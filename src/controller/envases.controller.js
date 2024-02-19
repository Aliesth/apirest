import { pool } from '../db.js'

export const getEnvase = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM envase')
    res.json(rows)
}

export const createEnvase = async (req, res) => {
    const {numEnvase, despacho, nroEnvase, claseEnvase, claseEnvio, pesoEnvase, cantEnvios, paisOrigen, paisDestino, estadoEnvase, indicadorEstado, ultimaModificacion, tipoAcontecimiento} = req.body
    const [rows] = await pool.query('INSERT INTO ENVASE (numEnvase, despacho, nroEnvase, claseEnvase, claseEnvio, pesoEnvase, cantEnvios, paisOrigen, paisDestino, estadoEnvase, indicadorEstado, ultimaModificacion, tipoAcontecimiento) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [numEnvase, despacho, nroEnvase, claseEnvase, claseEnvio, pesoEnvase, cantEnvios, paisOrigen, paisDestino, estadoEnvase, indicadorEstado, ultimaModificacion, tipoAcontecimiento])
    res.send({
        idEnvase: rows.insertId,
        numEnvase,
        despacho,
        nroEnvase,
        claseEnvase,
        claseEnvio,
        pesoEnvase,
        cantEnvios,
        paisOrigen,
        paisDestino,
        estadoEnvase, 
        indicadorEstado, 
        ultimaModificacion, 
        tipoAcontecimiento,
    })
}

export const updateEnvase = (req, res) => res.send('actualizando envases')

export const deleteEnvase = (req, res) => res.send('eliminando envases')    