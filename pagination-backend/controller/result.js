const { populationModel } = require("../model/model");

const results = function (value) {
  var match;
  if (value.state !== null && value.city !== null) {
    var state = value.state.toUpperCase();
    var city = value.city.toUpperCase();
    match = {
      state: state,
      city: city,
    };
  } else if (value.state !== null) {
    var state = value.state.toUpperCase();
    match = {
      state: state,
    };
  } else if (value.city !== null) {
    var city = value.city.toUpperCase();
    match = {
      city: city,
    };
  } else {
    match = {
      state: "",
      city: "",
    };
  }

  var pipeline = [
    {
      $match: match,
    },
  ];

  return new Promise((resolve, reject) => {
    populationModel
      .aggregate(pipeline)
      .exec()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.results = results;

const cities = function (numb) {
  var many = parseInt(numb.max);

  var pipe = [
    {
      $group: {
        _id: "$city",
        pop: {
          $sum: "$pop",
        },
      },
    },
    {
      $sort: {
        pop: -1,
      },
    },
    {
      $limit: many,
    },
  ];

  return new Promise((resolve, reject) => {
    populationModel
      .aggregate(pipe)
      .exec()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.cities = cities;