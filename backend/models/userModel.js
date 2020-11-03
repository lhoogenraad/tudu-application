import mongoose from 'mongoose';

// Describes how a user's data will be saved to the DB
const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
});

// Defines the name of the model as 'User', and uses the userSchema previously defined
const userModel = mongoose.model('User', userSchema);

export default userModel;