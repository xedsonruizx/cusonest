import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ParseStringPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isNaN(value)) {
      throw new HttpException(
        'Para texto no podemos recibir numeros',
        HttpStatus.BAD_REQUEST,
      );
    }
    return value.toUpperCase();
  }
}
