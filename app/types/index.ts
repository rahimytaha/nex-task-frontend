export type TInterceptorResponse<T>={
    data?:{
        success:boolean,
        message:string
        data?:T
    }
    error?:string|string[]
    status:number
}
