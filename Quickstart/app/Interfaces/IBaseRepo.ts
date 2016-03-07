
export interface IBaseRepo<T> {
    
    //
    Get(url: string) : Promise<T>;
    Post(url: string, bodyObject) : Promise<T>;
    Put(url: string, bodyObject) : Promise<T>;
    Delete(url: string) : Promise<T>;
    
}