import http from "../services/http-axios";

class TasksPGD {
  getAll() {
    return http.get("/tasks");
  }

  get(id) {
    return http.get(`/tasks/${id}`);
  }

  create(data) {
    return http.post("/tasks", data);
  }

  delete(id) {
    return http.delete(`/tasks/${id}`);
  }

}

export default new TasksPGD();