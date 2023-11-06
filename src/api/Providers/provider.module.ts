import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from 'src/entities/provider.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Provider])],
    controllers: [ProviderController],
    providers: [ProviderService],
    exports: [TypeOrmModule]
})
export class ProviderModule { }
