import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    interest: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllForms(): Promise<Array<ContactForm>>;
    getFormsByInterest(interest: string): Promise<Array<ContactForm>>;
    submitForm(name: string, phone: string, email: string, message: string, interest: string): Promise<void>;
}
