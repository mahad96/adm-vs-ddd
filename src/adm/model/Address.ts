export class Address {

    private _streetNumber: number;
    private _streetName: string;
    private _city: string;
    private _state: string;
    private _postalCode: string;
    private _country: string;

    public get streetNumber(): number {
        return this._streetNumber;
    }

    public set streetNumber(streetNumber: number) {
        this._streetNumber = streetNumber;
    }

    public get streetName(): string {
        return this._streetName;
    }

    public set streetName(streetName: string) {
        this._streetName = streetName;
    }

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }

    public get state(): string {
        return this._state;
    }

    public set state(state: string) {
        this._state = state;
    }

    public get postalCode(): string {
        return this._postalCode;
    }

    public set postalCode(postalCode: string) {
        this._postalCode = postalCode;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

}