module.exports = {
  get: function (config, callback) {
    config.query("SELECT * FROM employee", callback);
  },

  create: function (config, data, callback) {
    console.log(data.display_name);
    config.query(
      `INSERT INTO employee SET
  	full_name = '${data.full_name}',
      name_with_initial= '${data.name_with_initial}',
      display_name= '${data.display_name}',
      gender= '${data.gender}',
      dob= '${data.dob}',
      email= '${data.email}',
      p_number= '${data.p_number}',
      designation= '${data.designation}',
      emp_type= '${data.emp_type}',
      join_date= '${data.join_date}',
      experience= '${data.experience}',
      salary= '${data.salary}',
      notes = '${data.notes}'`,
      callback
    );
  },

  update: function (con, data, id, callback) {
    con.query(
      `UPDATE employee SET
        full_name = '${data.full_name}',
        name_with_initial= '${data.name_with_initial}',
        display_name= '${data.display_name}',
        gender= '${data.gender}',
        dob= '${data.dob}',
        email= '${data.email}',
        p_number= '${data.p_number}',
        designation= '${data.designation}',
        emp_type= '${data.emp_type}',
        join_date= '${data.join_date}',
        experience= '${data.experience}',
        salary= '${data.salary}',
        notes = '${data.notes}'
        WHERE emp_id= ${id}`,
      callback
    );
  },

  destroy: function (con, id, callback) {
    con.query(`DELETE FROM employee WHERE emp_id = ${id}`, callback);
  },
};
