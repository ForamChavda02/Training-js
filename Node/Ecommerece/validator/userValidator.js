function validateUser(user) {
    if(!user.name) return "Name is required";
    if(!user.email) return "Email is required";
    if(!user.password) return "Password is required";
    const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
     
    if(!passRegx.test(user.password)) return "password should be length of 8 and conatin capital small and special character";
    
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegx.test(user.email)) return "enter valid email address";

    return null;
}

module.exports = {
    validateUser
};