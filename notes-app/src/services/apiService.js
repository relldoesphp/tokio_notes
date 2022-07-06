import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8020/api",
    headers: {
        "Content-type": "application/json"
    }
});

const getAllNotes = () => {
    return http.get("/notes");
};

const createNote = data => {
    return http.post("/notes", data);
};

const updateNote = (id, data) => {
    return http.put(`/notes/${id}`, data);
};

const deleteNote = id => {
    return http.delete(`/notes/${id}`);
};

const getAllTags = () => {
    return http.get(`/tags`);
};

const createTag = data => {
    return http.post("/tags", data);
};

const updateTag = (id, data) => {
    return http.put(`/tags/${id}`, data);
};

const deleteTag = id => {
    return http.delete(`/tags/${id}`);
};

const apiService = {
    getAllNotes,
    getAllTags,
    createNote,
    createTag,
    updateNote,
    updateTag,
    deleteTag,
    deleteNote
};

export default apiService;

