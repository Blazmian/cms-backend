import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { Provider } from 'src/entities/provider.entity';
import { IProvider } from 'src/models/Provider';

@Controller('provider')
export class ProviderController {

    constructor(private providerService: ProviderService) {

    }

    @Get('/all')
    async getAllProviders(): Promise<string | Provider[]> {
        try {
            return await this.providerService.getAll()
        } catch (error) {
            return "Cannot read providers: " + error
        }
    }

    @Get('one/:id')
    getProvider(@Param('id') params): Promise<Provider> | string {
        try {
            const res = this.providerService.get(params)
            return res
        } catch (error) {
            return "Cannot read providers: " + error
        }
    }

    @Post()
    Create(@Body() params: IProvider) {
        try {
            const res = this.providerService.create(params)
            console.log("Provider created")
            return true
        } catch (error) {
            return "Cannot create provider: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: IProvider) {
        try {
            const res = this.providerService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update partner: " + error
        }
    }

    @Delete('delete/:id')
    deleteProvider(@Param('id') params) {
        try {
            const res = this.providerService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete partner: " + error
        }
    }

}
