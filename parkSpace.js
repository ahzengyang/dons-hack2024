class ParkSpace {
    constructor(size, address, start, end) {
        this.size = size; // s, m, b
        this.address = address;
        // this.long = 0.0;
        // this.lat = 0.0;
        this.start = new Date(start);
        this.end = new Date(end); // new Date()
        this.occupant = null;
    }

    static geoCode(address) {
        const token = "aaa16b5a69c74d11bfc6e7884370b934"; // OpenCage
        // Perform geocoding logic here
    }

    timeRem() {
        const now = new Date();
        now = now.now();
        if (now > this.start) {
            return this.end.getHours() - now.getHours(); // getmin too?
        } else {
            return this.end.getHours() - this.start.getHours();
        }
    }

    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

    setStart(start) {
        this.start = start;
    }

    getStart() {
        return this.start;
    }

    setEnd(end) {
        this.end = end;
    }

    getEnd() {
        return this.end;
    }

    setOccupant(occupant) {
        this.occupant = occupant;
    }

    getOccupant() {
        return this.occupant;
    }
}
