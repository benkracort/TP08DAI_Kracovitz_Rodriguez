import ProvinceRepository from "../repositories/province-repository.js";

class ProvinceService {

    repository = new ProvinceRepository();

    async getAll() {
        return await this.repository.getAll();
    }

    async getById(id) {
        return await this.repository.getById(id);
    }

    async insert(province) {

        if (!province.name || province.name.length < 3) {
            throw new Error("Nombre inválido");
        }

        await this.repository.insert(province);
    }

    async update(province) {

        if (!province.name || province.name.length < 3) {
            throw new Error("Nombre inválido");
        }

        return await this.repository.update(province);
    }

    async delete(id) {
        return await this.repository.delete(id);
    }
}

export default ProvinceService;