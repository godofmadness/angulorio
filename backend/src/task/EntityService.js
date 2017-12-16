/**
 * Created by mm on 12/16/17.
 */


tasks = [
    {
        id: 1,
        details: "Go to sleep"
    },
    {
        id: 2,
        details: "Go to bed"
    },
    {
        id: 3,
        details: "Go to gg"
    },
    {
        id: 4,
        details: "Go for a walk"
    }
];

module.exports = {

    findAll: function () {
        return tasks;
    },


    findOne: function (id) {
        return tasks.find(function (task) {
            return task.id == id;
        })
    }


    // todo create delete and update methods
    // delete:
}