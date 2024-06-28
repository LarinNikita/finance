import { config } from 'dotenv'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

config({ path: '.env.local' })

const sql = postgres(process.env.DATABASE_URL!)
const db = drizzle(sql)

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: 'drizzle' })
    } catch (error) {
        console.error('Error during migration:', error)
        process.exit(1)
    }
}

main()
