import { NotFoundError, BadRequestError } from "../middlewares/error.middleware.js";

class BaseService {
  constructor(model) {
    this.model = model;
  }

  // ==============================

  // GET ALL

  // ==============================

  async findAll(page = 1, limit = 10) {
    const start = (page - 1) * limit;

    // calcul de l'index de fin

    const end = start + limit;

    const [data, total] = await Promise.all([this.model.find().skip(start).limit(end), this.model.countDocuments()]);

    return {
      total,

      page,

      limit,

      data,
    };
  }

  // ==============================

  // GET ONE

  // ==============================

  async find(id) {
    const item = await this.model.findById(id);

    if (!item) {
      return null;
    }

    return item;
  }

  // ==============================

  // CREATE

  // ==============================

  async create(data) {
    if (!data) {
      return null;
    }

    return this.model.create(data);
  }

  // ==============================

  // UPDATE

  // ==============================

  async update(id, data) {
    const item = await this.model.findByIdAndUpdate(
      id,

      data,

      { new: true },
    );

    if (!item) {
      return null;
    }

    return item;
  }

  // ==============================

  // DELETE

  // ==============================

  async remove(id) {
    const item = await this.model.findByIdAndDelete(id);

    if (!item) {
      return null;
    }

    return true;
  }
}

export default BaseService;
