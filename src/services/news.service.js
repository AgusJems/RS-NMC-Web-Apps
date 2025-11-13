import pool from '../../config/db.js';

const newsService = {
    getAllNews: async () => {
        if (!pool) {
            throw new Error("Database pool not initialized in getAllNews.");
        }

        try {
            const query = 'SELECT * FROM berita';
            const result = await pool.query(query);
            return result;
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error; // Re-throw the error for the controller to handle
        }
    },

    getActiveNews: async () => {
        if (!pool) {
            throw new Error("Database pool not initialized in getActiveNews.");
        }

        try {
            const query = 'SELECT * FROM berita WHERE status = 1';
            const result = await pool.query(query);
            return result;
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error;
        }
    },
    
    insertDetailNews: async (jenis_id, nama_berita, deskripsi, image) => {
        if (!pool) throw new Error("Database pool not initialized in insertDetailNews.");

        try {
            const query = `
            INSERT INTO berita (jenis_id, nama_berita, deskripsi, image)
            VALUES (?, ?, ?, ?)
            `;
            await pool.query(query, [jenis_id, nama_berita, deskripsi, image]);
        } catch (error) {
            console.error('Error inserting news:', error);
            throw error;
        }
    },

    updateNews: async (id, updateData) => {
        try {
            // Build the SET part of the SQL query dynamically based on updateData
            const setClauses = Object.keys(updateData).map(key => `${key} = ?`).join(', ');
            const values = Object.values(updateData);
            values.push(id); // Add id to the end of values for the WHERE clause

            await pool.query(`UPDATE berita SET ${setClauses} WHERE Id = ?`, values);
            return true; // Indicate success
        } catch (error) {
            console.error(`Error updating news with ID ${id}:`, error);
            throw error;
        }
    },

    deleteNews: async (id) => {
        if (!pool) {
            throw new Error("Database pool not initialized in deleteNews.");
        }

        try {
            const query = `
                DELETE FROM berita
                WHERE Id = ?
            `;
            await pool.query(query, [id]);
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error; // Re-throw the error for the controller to handle
        }
    },

    getNewsById: async (id) => {
        if (!pool) {
            throw new Error("Database pool not initialized in getNewsById.");
        }

        try {
            const query = 'SELECT * FROM berita WHERE Id = ?';
            const [result] = await pool.query(query, [id]);
            return result;
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error; // Re-throw the error for the controller to handle
        }
    },
}

export default newsService;
