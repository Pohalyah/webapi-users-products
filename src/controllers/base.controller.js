class BaseController {

  constructor(service) {
    this.service = service;
  }

  /**
   * GET ALL
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
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

  /**
   * GET ONE : récupération d'un élément
   * 
   * @param {*} req La requête HTTP reçue
   * @param {*} res Le résultat renvoyé par la Web API
   * @param {*} next
   */
  read = async (req, res, next) => {
    try {
      const item = await this.service.find(req.params.id);

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Create : création d'un objet en base de données
   * 
   * @param {*} req La requête HTTP reçue
   * @param {*} res Le résultat renvoyé par la Web API
   * @param {*} next 
   */
  create = async (req, res, next) => {
    try {
      const item = await this.service.create(req.body);

      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Mise à jour d'un élément de la base de données
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
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
