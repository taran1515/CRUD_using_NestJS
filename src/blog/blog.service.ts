import { Injectable } from '@nestjs/common';
import { getManager, MigrationInterface, QueryRunner } from "typeorm";
import { BlogInterface } from './blog.interface'


@Injectable()
export class BlogsService {
    async findAll(): Promise<any> {
        const response = await getManager().query(`Select * FROM blog`)
        console.log(response)
        return response;
    }

    async findOne(id): Promise<any> {
        const response = await getManager().query(`Select * FROM blog WHERE id=${id}`)
        console.log(response)
        return response;
    }

    async createBlog(blog: BlogInterface): Promise<any> {
        console.log(blog.name)
        const response = await getManager().query(`INSERT INTO blog(name,author) VALUES(?,?)`,[blog.name,blog.author])
        console.log(response)
        return response;
    }

    async updateBlog(id,blog: BlogInterface): Promise<any>{
        const response = await getManager().query(`UPDATE blog SET name=(?),author=(?) WHERE id=(?)`, [blog.name, blog.author,id])
        return response;

    }
}