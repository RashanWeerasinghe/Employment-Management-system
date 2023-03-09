const employee = require("../Model/employee");

module.exports = {
  index: function (req, res) {
    employee.get(req.config, function (err, data, fields) {
      if (err) console.log(err);
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
  },

  store: function (req, res) {
    employee.create(req.config, req.body, function (err, data, fields) {
      if (err) console.log(err);
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
  },

  update: function (req, res) {
    employee.update(
      req.config,
      req.body,
      req.params.id,
      function (err, data, fields) {
        if (err) console.log(err);
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
  },

  destroy: function (req, res) {
    employee.destroy(req.config, req.params.id, function (err) {
      res.redirect("/employee");
    });
  },
};
