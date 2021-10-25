import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { resolve } from 'path/posix';
import { AppService } from './app.service';
import CreateCatDto from './dto/CreateCatDto';



@Controller('/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return 'hello, world by mojo';
  }

  @Get('/async_f1')
  getAsyncResult(): Promise<any> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('async asdfasdf');
      }, 1000);
    })
  }

  @Get('/body')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('typeof createCatDto: ' + typeof createCatDto);
    console.dir('createCatDto: ' + createCatDto);

    console.log('name: ' + createCatDto.name);
    console.log('age: ' + createCatDto.age);
    console.log('breed: ' + createCatDto.breed);

    return 'This action adds a new cat';
  }
}

@Controller('/cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return 'This action returns all cats (limit: ${query.limit} items)';
  // }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return 'This action returns a #${id} cat';
  }
}