export default interface IDocument<T>{
  findById(query :string) :Promise<T>;
  findByName(query :string) :Promise<T>;
  write(target :T) :Promise<T>;
}
