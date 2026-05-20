class BaseController {
  constructor(service) {
    this.service = service;
  }

  // ==============================

  // GET ALL

  // ==============================

  list = async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;

      const limit = Number(req.query.limit) || 10;

      const result = await this.service.findAll(
        page,

        limit,
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // ==============================

  // GET ONE

  // ==============================

  read = async (req, res, next) => {
    try {
      const item = await this.service.find(req.params.id);

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };

  // ==============================

  // CREATE

  // ==============================

  create = async (req, res, next) => {
    try {
      const item = await this.service.create(req.body);

      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  };

  // ==============================

  // UPDATE

  // ==============================

  update = async (req, res, next) => {
    try {
      const item = await this.service.update(
        req.params.id,

        req.body,
      );

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };

  // ==============================

  // DELETE

  // ==============================

  remove = async (req, res, next) => {
    try {
      await this.service.remove(req.params.id);

      res.status(200).json({
        success: true,

        message: "Deleted",
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BaseController;
