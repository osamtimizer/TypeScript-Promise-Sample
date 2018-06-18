export default interface IDocument{
    findById(query :string) :Promise<object>
    findByName(query :string) :Promise<object>
    write(target :object) :Promise<object>
}