# Projekt zaliczeniowy z przedmiotu TIN

Autor:
* [Jakub Rusinowicz S17455](https://github.com/astrocodespace)

### Temat:
#### "Wirtualny urząd"

Tematem projektu jest aplikacja umożliwiająca urzędom przyjmowanie petentów w formie wideorozmowy online. Aplikacja powinna zawierać trzy typy użytkowników: Pracownik, Klient oraz Administrator, umożliwiać dodawanie, edycję oraz usuwanie obsługiwanych usług/spraw urzędowych dla których przechowywane będą dane takie jak Nazwa oraz Opis o których interesanci mogą porozmawiać z urzędnikiem.
Pracownik powinien mieć możliwość otworzenia pokoju do którego będzie przyjmował interesantów na wideorozmowę. Interesant/Klient powinien mieć możliwość zapisania się do kolejki w której będzie oczekiwał na zaproszenie do wideorozmowy.

Pracownik:
* Imię
* Nazwisko
* Adres email

Klient:
* Imię
* Nazwisko
* Adres email

Usługa:
* Nazwa
* Opis

Pokój:
* Usługi

Kolejka:
* Klienci

#### Model UML:

![UML Model](./.project/UML.png)



## Struktura projektu

### Frontend

Frontend aplikacji znajduje się w katalogu:

```
./frontend
```

Całość podzielona jest modułowo, w związku z czym każdą część można wydzielić jako oddzielną aplikację.

W skład aplikacji wchodzić będą następujące moduły:

* Admin - moduł Administratora: `./frontend/modules/admin`
* Client - moduł Klienta: `./frontend/modules/client`
* Employee - moduł pracownika `./frontend/modules/employee`
* Auth - moduł autoryzacji `./frontend/modules/auth`

W ramach MP1 został przygotowany ogólny layout:

### Modułu klienta:

Wersja desktop:
![CLient Module UI](./.project/MP1_client.png)

Wersja mobile (bez gotowych buttonów w tabbarze):
![CLient Module UI](./.project/MP1_client_responsive.png)

ORAZ

### Część modułu pracownika:

Wersja desktop:
![Employee Module UI](./.project/MP1_employee.png)

Wersja mobile:
![Employee Module UI](./.project/MP1_employee_responsive.png)
