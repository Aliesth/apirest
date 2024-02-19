import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_HOST = process.env.DB_HOST || '10.180.180.172'
export const DB_PORT = process.env.DB_PORT || 33091 
export const DB_PASSWORD = process.env.DB_PASSWORD ||'p4lF0g0fRx'
export const DB_DATABASE = process.env.DB_DATABASE || 'pardips_bodenor' 
export const HOST = process.env.HOST || '0.0.0.0'