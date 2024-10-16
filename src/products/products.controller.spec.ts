import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './products.service';


describe('ProductService', () => {
  let controller: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductService],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
