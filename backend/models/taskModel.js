import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {type: String, require: true},
    // Could potentially make description required
    description: {type: String, require: false},
    dateCreated: {type: Date, require: true},
    // Represents the ID of the user who created this task
    userID: {type: String, require: true},
});

const taskModel = mongoose.model('Task', taskSchema);

export default taskModel;