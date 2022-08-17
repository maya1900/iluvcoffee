import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeEntity } from './entites/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeEntity])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
