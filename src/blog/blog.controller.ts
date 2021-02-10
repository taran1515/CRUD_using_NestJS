import { Body, Param, Post, Put } from '@nestjs/common';
import { Controller, Get, Query } from '@nestjs/common';
import { getManager, MigrationInterface, QueryRunner } from "typeorm";
import { BlogsService } from './blog.service'
import {BlogInterface} from './blog.interface'


@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) { }
    
    @Get()
    async findAll(): Promise<any> {
        return this.blogsService.findAll();
    }
    
    @Get(':id')
    async findOne(@Param() params): Promise<any>{
        console.log(params.id)
        return this.blogsService.findOne(params.id);
    }

    @Post()
    async createBlog(@Body() blog: BlogInterface) {
        return this.blogsService.createBlog(blog)
    }

    @Put(':id')
    async updateBlog(@Param() params, @Body() blog: BlogInterface) {
        return this.blogsService.updateBlog(params.id,blog)
    }
}