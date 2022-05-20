import http from "../http-common";

class MissionService {
  getAll() {
    return http.get("/mission");
  }
  get(id) {
    return http.get(`/mission/${id}`);
  }
  create(data) {
    return http.post("/mission", data);
  }
  update(id, data) {
    return http.put(`/mission/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mission/${id}`);
  }
}

export default new MissionService();