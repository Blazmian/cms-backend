import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider_productsController } from './provider_products.controller';
import { Provider_productsService } from './provider_products.service';
import { ProviderProducts } from 'src/entities/provider_products.entity';
import { Provider } from 'src/entities/provider.entity';
import { ProviderService } from '../Providers/provider.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProviderProducts, Provider])],
    controllers: [Provider_productsController],
    providers: [Provider_productsService, ProviderService],
    exports: [TypeOrmModule]
})
export class Provider_productsModule { }
