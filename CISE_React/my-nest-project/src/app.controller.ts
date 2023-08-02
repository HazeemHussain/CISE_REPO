import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    
    const message =  `My name is Hazeem<br><br>I am trying to be a good software engineer`

    //nest start --watch
   // console.log(message);
    return message; 

    ;
  }
}

