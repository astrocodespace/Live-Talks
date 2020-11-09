<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201108085131 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE queues_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE users_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE queues (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE rooms (uuid VARCHAR(255) NOT NULL, PRIMARY KEY(uuid))');
        $this->addSql('CREATE TABLE services_rooms (room_uuid VARCHAR(255) NOT NULL, service_uuid VARCHAR(255) NOT NULL, PRIMARY KEY(room_uuid, service_uuid))');
        $this->addSql('CREATE INDEX IDX_C043A0D4B27BBAC2 ON services_rooms (room_uuid)');
        $this->addSql('CREATE INDEX IDX_C043A0D41F3CE44A ON services_rooms (service_uuid)');
        $this->addSql('CREATE TABLE services (uuid VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, icon VARCHAR(255) NOT NULL, PRIMARY KEY(uuid))');
        $this->addSql('CREATE TABLE users (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, discriminator VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E9E7927C74 ON users (email)');
        $this->addSql('ALTER TABLE services_rooms ADD CONSTRAINT FK_C043A0D4B27BBAC2 FOREIGN KEY (room_uuid) REFERENCES rooms (uuid) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE services_rooms ADD CONSTRAINT FK_C043A0D41F3CE44A FOREIGN KEY (service_uuid) REFERENCES services (uuid) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE services_rooms DROP CONSTRAINT FK_C043A0D4B27BBAC2');
        $this->addSql('ALTER TABLE services_rooms DROP CONSTRAINT FK_C043A0D41F3CE44A');
        $this->addSql('DROP SEQUENCE queues_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE users_id_seq CASCADE');
        $this->addSql('DROP TABLE queues');
        $this->addSql('DROP TABLE rooms');
        $this->addSql('DROP TABLE services_rooms');
        $this->addSql('DROP TABLE services');
        $this->addSql('DROP TABLE users');
    }
}
