const { Schema, model } = require("mongoose")

const employeeSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
     type: String,
     required: true,
     trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
})

employeeSchema.pre('save', async function(next){
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password= await bcrypt.hash(this.password, saltRounds);
  }
  next();
})

employeeSchema.methods.isCorrectPassword= async function (password){
  return bcrypt.compare(password, this.password);
}

const Employee= model("Employee", employeeSchema);
module.exports= Employee