import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider_productsController } from './provider_products.controller';
import { Provider_productsService } from './provider_products.service';
import { ProviderProducts } from 'src/entities/provider_products.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProviderProducts])],
    controllers: [Provider_productsController],
    providers: [Provider_productsService],
    exports: [TypeOrmModule]
})
export class Provider_productsModule { }
