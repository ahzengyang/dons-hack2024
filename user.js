class User {
    constructor(username, password, firstName, lastName, email, phone) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.space = null;
        this.car = null;
    }

    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getLastName() {
        return this.lastName;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    setSpace(size, address, start, end) {
        this.space = new ParkSpace(size, address, start, end);
    }

    getSpace() {
        return this.space;
    }

    setCar(size, plate) { // state/gov api to validate liscense plate?
        this.car = new Car(size, plate);
    }

    getCar() {
        return this.car;
    }
}