import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { IProvider } from 'src/models/Provider';
import { ProviderProducts } from 'src/entities/provider_products.entity';
import { Provider_productsService } from './provider_products.service';
import { IProvider_product } from 'src/models/Provider_product';

@Controller('provider_product')
export class Provider_productsController {

    constructor(private provider_productsService: Provider_productsService) {

    }

    @Get('/all')
    async getAllProvider_products(): Promise<string | ProviderProducts[]> {
        try {
            return await this.provider_productsService.getAll()
        } catch (error) {
            return "Cannot read providers: " + error
        }
    }

    @Get('one/:id')
    getProvider_products(@Param('id') params): Promise<ProviderProducts> | string {
        try {
            const res = this.provider_productsService.get(params)
            return res
        } catch (error) {
            return "Cannot read providers: " + error
        }
    }

    @Post()
    Create(@Body() params: IProvider_product) {
        try {
            const res = this.provider_productsService.create(params)
            console.log("Product created")
            return true
        } catch (error) {
            return "Cannot create product: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: IProvider_product) {
        try {
            const res = this.provider_productsService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update partner: " + error
        }
    }

    @Delete('delete/:id')
    deleteProvider_products(@Param('id') params) {
        try {
            const res = this.provider_productsService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete partner: " + error
        }
    }

}
