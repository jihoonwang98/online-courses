import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('/boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  public getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  public createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    console.log('dto: ', createBoardDto);

    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  public getBoardById(@Param('id') id: string): Board {
    console.log('id: ', id);
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  public deleteBoardById(@Param('id') id: string): void {
    console.log('id: ', id);
    return this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  public updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Board {
    console.log('id: ', id);
    console.log('status: ', status);

    return this.boardsService.updateBoardStatus(id, status);
  }
}
