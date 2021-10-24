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
import { BoardStatus } from './boards-status.enum';
import { Board } from './boards.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import BoardStatusValidationPipe from './pipes/board-status-validation.pipe';

@Controller('/boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  public getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  public createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    console.log('dto: ', createBoardDto);

    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  public getBoardById(@Param('id') id: number): Promise<Board> {
    console.log('id: ', id);
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  public deleteBoardById(@Param('id') id: number): Promise<void> {
    console.log('id: ', id);
    return this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  public updateBoardStatus(
    @Param('id') id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    console.log('id: ', id);
    console.log('status: ', status);

    return this.boardsService.updateBoardStatus(id, status);
  }
}
