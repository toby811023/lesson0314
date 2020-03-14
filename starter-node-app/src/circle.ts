export class Circle {
    static pi: number = 3.14
  //  private _name :string;
  // public _name :string;
     protected _name :string;

    constructor(name:string){
      this._name = name;
    }
    get name(){
        return this._name;
    }

    getPI(){
        return 3.1415922222;
    }
}

export class ExtCircle extends Circle{
    public getProted(){
        return this._name
    }

}

export class ExtCircleThird extends Circle{
    public getProted(){
        return this._name+'abc'
    }
    getObj(){
        let o : object = {a:'abc', z:999};
        return o;
    }
}