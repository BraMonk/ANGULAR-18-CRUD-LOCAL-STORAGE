
export class EmployeeModel{

    EmpId: number;
    name: string;
    city: string;
    contactNo: string;
    emailID: string;
    state: string;
    address: string;

    constructor()
    {
        this.EmpId = 0;
        this.name = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.emailID = "";
        this.contactNo = "";
    }


}